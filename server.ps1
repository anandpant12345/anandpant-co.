$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()
Write-Host "Server running at http://localhost:8080/"

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $path = $request.Url.LocalPath
        if ($path -eq "/") { $path = "/index.html" }
        
        $localPath = Join-Path (Get-Location).Path $path
        $localPath = $localPath.Replace('/', '\')
        
        if (Test-Path $localPath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $contentType = "text/plain"
            switch ($ext) {
                ".html" { $contentType = "text/html; charset=utf-8" }
                ".js"   { $contentType = "application/javascript; charset=utf-8" }
                ".css"  { $contentType = "text/css; charset=utf-8" }
                ".jpg"  { $contentType = "image/jpeg" }
                ".jpeg" { $contentType = "image/jpeg" }
                ".png"  { $contentType = "image/png" }
                ".svg"  { $contentType = "image/svg+xml" }
                ".json" { $contentType = "application/json; charset=utf-8" }
            }
            
            $response.ContentType = $contentType
            $content = [System.IO.File]::ReadAllBytes($localPath)
            
            if ($request.HttpMethod -eq "HEAD") {
                $response.ContentLength64 = $content.Length
            } else {
                $response.ContentLength64 = $content.Length
                try {
                    $response.OutputStream.Write($content, 0, $content.Length)
                } catch {
                    # Silent catch for socket close/aborted writes
                }
            }
        } else {
            $response.StatusCode = 404
            $errorMsg = "File Not Found: $path"
            $buf = [System.Text.Encoding]::UTF8.GetBytes($errorMsg)
            if ($request.HttpMethod -eq "HEAD") {
                $response.ContentLength64 = $buf.Length
            } else {
                $response.ContentLength64 = $buf.Length
                try {
                    $response.OutputStream.Write($buf, 0, $buf.Length)
                } catch {}
            }
        }
        try { $response.Close() } catch {}
    } catch {
        if ($null -ne $response) {
            try { $response.Close() } catch {}
        }
    }
}

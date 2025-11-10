Write-Host "🚀 Nettoyage et vérification de NdiSamba Connect sur Vercel..." -ForegroundColor Green

# =======================
# 1️⃣ Suppression des fichiers lourds
# =======================
if (Test-Path "node_modules") { Remove-Item -Recurse -Force node_modules }
if (Test-Path ".next") { Remove-Item -Recurse -Force .next }
if (Test-Path "out") { Remove-Item -Recurse -Force out }

Write-Host "✅ Dossiers lourds supprimés."

# =======================
# 2️⃣ Réécriture du .gitignore
# =======================
$gitignore = @"
node_modules/
.next/
out/
.env
.env.local
.vercel/
.DS_Store
Thumbs.db
"@
Set-Content -Path ".gitignore" -Value $gitignore
Write-Host "✅ Fichier .gitignore mis à jour."

# =======================
# 3️⃣ Nettoyage Git
# =======================
git rm -r --cached node_modules 2>$null
git rm -r --cached .next 2>$null
git rm -r --cached out 2>$null
git add .
git commit -m "🧹 Nettoyage complet du dépôt (fichiers lourds supprimés)"
git push origin main --force
Write-Host "📤 Dépôt Git mis à jour proprement."

# =======================
# 4️⃣ Vérification du déploiement Vercel
# =======================
$vercelUrl = "https://ndisamba-connect-git-main-sambas-projects-006d3b0e.vercel.app"
Write-Host "⏳ Vérification de la disponibilité du déploiement sur Vercel..."

try {
    $response = Invoke-WebRequest -Uri $vercelUrl -UseBasicParsing -TimeoutSec 15
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Site en ligne : $vercelUrl" -ForegroundColor Cyan
    } else {
        Write-Host "⚠️ Réponse inattendue du serveur (code $($response.StatusCode))" -ForegroundColor Yellow
    }
}
catch {
    Write-Host "❌ Impossible d’accéder au site Vercel. Le build peut encore être en cours..." -ForegroundColor Red
    Write-Host "🔁 Réessaie dans 2 à 3 minutes si le push vient d’être fait."
}

# =======================
# 5️⃣ Vérification du dernier build
# =======================
Write-Host "`n🔍 Vérification du statut du dernier build sur Vercel..."
Write-Host "👉 Ouvre : https://vercel.com/sambas-projects/ndisamba-connect/deployments" -ForegroundColor Yellow

Write-Host "`n🎯 Script terminé avec succès !" -ForegroundColor Green

Write-Host "🚀 Nettoyage du dépôt NdiSamba Connect en cours..." -ForegroundColor Green

# Étape 1 : suppression des dossiers lourds
if (Test-Path "node_modules") { Remove-Item -Recurse -Force node_modules }
if (Test-Path ".next") { Remove-Item -Recurse -Force .next }
if (Test-Path "out") { Remove-Item -Recurse -Force out }

# Étape 2 : vérifie .gitignore
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

# Étape 3 : nettoyage du cache Git
git rm -r --cached node_modules 2>$null
git rm -r --cached .next 2>$null
git rm -r --cached out 2>$null

# Étape 4 : commit et push
git add .
git commit -m "🧹 Nettoyage complet du dépôt (fichiers lourds supprimés)"
git push origin main --force

Write-Host "🎯 Dépôt nettoyé et mis à jour avec succès !" -ForegroundColor Cyan

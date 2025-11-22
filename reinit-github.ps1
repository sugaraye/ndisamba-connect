# =========================================================
# 🧹 Script : Réinitialisation complète du dépôt Git
# 🔧 Auteur : Ndi Samba Dev Automation
# 🚀 Objectif : supprimer les fichiers lourds et recréer un dépôt propre
# =========================================================

Write-Host "🚀 Démarrage du processus de nettoyage Git..." -ForegroundColor Cyan

# =========================
# 1️⃣ Suppression des dossiers lourds
# =========================
$folders = @("node_modules", ".next", "out", "dist")
foreach ($folder in $folders) {
    if (Test-Path $folder) {
        Remove-Item -Recurse -Force $folder
        Write-Host "🗑️  Dossier supprimé : $folder"
    }
}
Write-Host "✅ Dossiers lourds supprimés."

# =========================
# 2️⃣ Nettoyage Git complet
# =========================
if (Test-Path ".git") {
    Write-Host "🧽 Nettoyage du cache Git..."
    git gc --prune=now --aggressive
    Write-Host "🧹 Suppression du dossier .git (historique complet)..."
    Remove-Item -Recurse -Force .git
}

# =========================
# 3️⃣ Recréation du dépôt
# =========================
Write-Host "🔄 Réinitialisation du dépôt..."
git init
git add .
git commit -m "🧹 Réinitialisation complète du dépôt NdiSamba Connect"
git branch -M main

# =========================
# 4️⃣ Reconnexion à GitHub
# =========================
$remoteUrl = "https://github.com/sugaraye/ndisamba-connect.git"
Write-Host "🔗 Connexion au dépôt GitHub : $remoteUrl"
git remote add origin $remoteUrl

# =========================
# 5️⃣ Push complet
# =========================
Write-Host "📤 Envoi du nouveau dépôt sur GitHub..."
git push -u origin main --force

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dépôt NdiSamba Connect nettoyé et mis à jour avec succès !" -ForegroundColor Green
    Write-Host "🌐 Vérifie le déploiement Vercel ici : https://vercel.com/sambas-projects/ndisamba-connect/deployments"
} else {
    Write-Host "❌ Erreur : le push a échoué. Vérifie ta connexion Internet ou les droits GitHub." -ForegroundColor Red
}

# =========================
# 6️⃣ Vérification de la taille finale
# =========================
Write-Host "`n📊 Vérification de la taille du dépôt..."
git count-objects -vH
Write-Host "🎯 Processus terminé."

# Uso de Git en este proyecto

## 1. Instalación
    sudo apt update
    sudo apt install git
    git --version

## 2. Configuración
    git config --global user.name "Juan Antonio López"
    git config --global user.email "correo"
    git config --global init.defaultBranch main

## 3. Conexión con GitHub por SSH
    ssh-keygen -t ed25519 -C "correo"
    cat ~/.ssh/id_ed25519.pub   # se pega en GitHub → Settings → SSH keys
    ssh -T git@github.com

## 4. Flujo de trabajo (Git Flow)
    git clone git@github.com:USUARIO/REPO.git
    git switch develop
    git switch -c feature/nombre
    git add .
    git commit -m "feat: ..."
    git push -u origin feature/nombre
    # PR en GitHub hacia develop → CI en verde → merge
    git switch develop
    git pull

## 5. Comandos de consulta
    git status
    git branch -a
    git log --oneline --graph
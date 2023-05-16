pipeline {
    agent any

    stages {
        stage('Clonar Repositório') {
            steps {
               git branch: 'main', url: 'https://github.com/ppaulosuh/testes-e2e-ebac-shop.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
               bat 'npm install'
            }
        }
        stage('Executar testes') {
            steps {
               bat 'npm run cy:run'
            }
        }
    }
}
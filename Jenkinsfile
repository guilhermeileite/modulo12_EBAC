pipeline {
    agent any
    options {
    ansiColor('xterm') 

}

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/guilhermeileite/modulo12_EBAC.git'
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

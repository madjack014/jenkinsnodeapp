pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/madjack014/jenkinsnodeapp.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run App') {
            steps {
                sh 'node index.js'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test.js'
            }
        }
    }
    post {
        always {
            echo 'I will always say Hello again!'
        }
    }
}   
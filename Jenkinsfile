pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git url: 'https://github.com/madjack014/jenkinsnodeapp.git',
                    branch: 'main'
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
                sh 'node test.js'
            }
        }
    }
    post {
        always {
            echo 'I will always say Hello again!'
        }
    }
}   
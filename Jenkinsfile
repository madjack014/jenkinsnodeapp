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
        stage('Containerize') {
            steps {
                sh 'docker build -t jenkinsnodeappwdocker .'   
            }
        }
        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name jnawd jenkinsnodeappwdocker'
            }
        }
        stage('Docker container logs') {
            steps {
                sh 'docker logs jnawd'
            }
        }
    }
    post {
        always {
            echo 'I will always say Hello again!'
        }
    }
}   
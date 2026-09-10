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
                script {
                    env.CONTAINER_ID = sh(script: 'docker run -d -p 3000:3000 jenkinsnodeappwdocker', returnStdout: true).trim()
                }
            }
        }
        stage('Docker container logs') {
            steps {
                sh "docker logs ${env.CONTAINER_ID}"
            }
        }
    }
    post {
        always {
            echo 'I will always say Hello again!'
        }
    }
}   
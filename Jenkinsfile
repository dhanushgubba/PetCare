pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/dhanushgubba/PetCare.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t petcare-backend .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 5000:5000 petcare-backend'
            }
        }
    }
}

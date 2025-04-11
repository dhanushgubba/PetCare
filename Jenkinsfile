pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/dhanushgubba/PetCare.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t petcare-backend .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 5001:5000 petcare-backend'
            }
        }
    }
}

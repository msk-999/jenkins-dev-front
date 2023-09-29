pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Update Code Inside Docker Container') {
            steps {
                script {
                    // Execute git pull inside the Docker container
                    def containerName = 'demo'
                    def gitCommand = 'cd /home/jenkins-dev-front && git pull'
                    sh "docker exec -i $containerName bash -c '$gitCommand'"
                }
            }
        }
    }
}

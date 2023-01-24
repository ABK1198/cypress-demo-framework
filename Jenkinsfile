pipline{

    agent any


    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description:"Description...")
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'],description:"DescriptionBS...")

    }

    stages{
        stage('Deploying'){
            echo "Building the application"
        }

        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }    
        }
        stage('Deploying'){
            echo "Deploy the application"
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true,
            reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report',
            reportTitles: '', useWrapperFileDirectly: true])
        }
    }   
}
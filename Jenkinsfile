pipeline {

    agent any


    parameters{
        string(name: 'Location', defaultValue: "cypress/e2e/Cypress Refresh/Cypresslocation.cy.js",description:"Location Given Here")
        choice(name: 'Browser', choices:['chrome','edge'],description:"Browser Choice Given here")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('First Stage '){
            steps{
                echo"First Stage Test"
            }
        }

        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${Browser} --spec ${SPEC}"
            }
        }

        stage('deploy'){
            steps{
                echo"deploying"
            }
        }
    }

    post('Post HTML files: '){
        always{
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false,
        keepAll: true, reportDir: '', reportFiles: 'index.html',
        reportName: 'HTML Report', reportTitles: 'ABK Report', useWrapperFileDirectly: true])
        }
    }
}   
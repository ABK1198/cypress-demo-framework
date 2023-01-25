pipeline{

    agent any


    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/CypressRefresh/Assertion_commands.cy.js",description:"Location Given Here")
        choice(name: 'BROWSER', choices:['chrome','edge'],description:"Browser Choice Given here")
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

         stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
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
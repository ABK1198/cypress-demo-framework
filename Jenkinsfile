pipeline{

    agent any;

    environment{
        BUILD_USER = ''
    }


     parameters{
         string(name: 'SPEC', defaultValue: "cypress/e2e/2-advanced-examples/Assertions-Practice", description:"Description...")
         choice(name: 'BROWSER', choices: ['chrome','edge','firefox'],description:"DescriptionBS...")

     }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('build app'){
           steps{
              echo "Building the application" 
           }
        }

        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
              // bat "npx cypress run --browser chrome --spec cypress/e2e/**/**"
            }    
        }
        stage('deploy'){
            steps{
               echo "Building the application" 
           }
        }
    }

    post('Declarative post'){
        // always{

        //     script{
        //         BUILD_USER = getBuildUser()
        //     }

        //     slackSend channel: '#jenkins-messages',
        //         color: COLOR_MAP[currentBuild.currentResult],
        //         message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER}\n Tests:${SPEC} executed at ${BROWSER}"   

        //     publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\example\\cypress\\reports\\html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        // }
    success {
        slackSend channel: '#jenkins-messages', color: 'good', message: 'Build Started: ${env.JOB_NAME} ${env.BUILD_NUMBER}', tokenCredentialId: 'a7412c0a-33e6-4ab8-85c0-a5a4ed8ff948'
    }

    }   

}    
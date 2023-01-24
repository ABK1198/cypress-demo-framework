pipeline{

    agent any;


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
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\example\\cypress\\reports\\html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }   
}
    
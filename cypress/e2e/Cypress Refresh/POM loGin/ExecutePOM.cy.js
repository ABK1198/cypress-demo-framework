import { loGin } from "../../../support/TOOLSqaPOM/loGin";


describe('Executing POM Implementation',()=>{
    beforeEach('Visit Website',()=>{
        cy.visit('https://demoqa.com/login')
    })

    it('Login Success',()=>{
        loGin.TYPEuserNAAM('ABK11')
        loGin.TypepassWARD('Zxcvbnm@123')
        loGin.ClickLAGIN()
    })
})

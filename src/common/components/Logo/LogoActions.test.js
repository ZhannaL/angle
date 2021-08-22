const LogoActions = require("./LogoActions")
// @ponicode
describe("LogoActions.selectСontent", () => {
    test("0", () => {
        let callFunction = () => {
            LogoActions.selectСontent("audio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            LogoActions.selectСontent("xhtml")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            LogoActions.selectСontent("image/jpg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            LogoActions.selectСontent("episodes")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            LogoActions.selectСontent("json")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            LogoActions.selectСontent(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

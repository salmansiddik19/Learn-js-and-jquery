var expressionField = $("#expression")
var resultField = $("#result")

function insertNumber(number) {
    var existingNummers = expressionField.val();
    expressionField.val(existingNummers + number)
}

function clearAll() {
    expressionField.val('')
    resultField.val('')
}

function calculateResult() {
    resultField.val('')
    var result = eval(expressionField.val())
    resultField.val(result)
    expressionField.val('')
}

function undoNumber() {
    var presentValue = expressionField.val()
    if (presentValue != '') {
        expressionField.val(presentValue.slice(0, -1))
    }
}
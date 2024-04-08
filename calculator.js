
    let resultField = document.getElementById('result');
    
    function appendValue(value) {
        resultField.value += value;
    }
    
    function calculate() {
        try {
            resultField.value = eval(resultField.value);
        } catch (e) {
            resultField.value = 'Error';
        }
    }
    
    function clearResult() {
        resultField.value = '';
    }
    


    

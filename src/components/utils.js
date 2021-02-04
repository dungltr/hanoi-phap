export default {
    openFB(address, api, info, name, pass, facebook){
        api.getInfoCustomer(info,name,pass).then(response => {       
            var tempData = response.data
            var index = address.length
            tempData = tempData.slice(tempData.lastIndexOf(address) + index, tempData.lastIndexOf(',') + 1)
            tempData = tempData.slice(0,tempData.indexOf(','))
            var trueLink = facebook + tempData   
            window.open(trueLink)
            console.log(response)
            })
            .catch(error => {
            this.errors.push(error)
            })
    },
    toUTF8Array(str) {
        var utf8 = [];
        for (var i=0; i < str.length; i++) {
            var charcode = str.charCodeAt(i);
            if (charcode < 0x80) utf8.push(charcode);
            else if (charcode < 0x800) {
                utf8.push(0xc0 | (charcode >> 6), 
                          0x80 | (charcode & 0x3f));
            }
            else if (charcode < 0xd800 || charcode >= 0xe000) {
                utf8.push(0xe0 | (charcode >> 12), 
                          0x80 | ((charcode>>6) & 0x3f), 
                          0x80 | (charcode & 0x3f));
            }
            // surrogate pair
            else {
                i++;
                charcode = ((charcode&0x3ff)<<10)|(str.charCodeAt(i)&0x3ff)
                utf8.push(0xf0 | (charcode >>18), 
                          0x80 | ((charcode>>12) & 0x3f), 
                          0x80 | ((charcode>>6) & 0x3f), 
                          0x80 | (charcode & 0x3f));
            }
        }
        return utf8
    }    
}

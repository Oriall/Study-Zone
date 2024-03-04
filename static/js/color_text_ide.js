const editableContent = document.getElementById('vs-code');
const displayContent = document.getElementById('displayContent');

editableContent.addEventListener('input', function () {
    const text = this.innerText;
    const formattedText = text.replace(/(\+|-|=|==|\+=|-=|\*|\(|\))/g, '<span style="color: #FF79C6;">$1</span>')
                              .replace(/\bfor\b/g, '<span style="color: #FF79C6;">for</span>')
                              .replace(/\bdef\b/g, '<span style="color: #FF79C6;">def</span>')
                              .replace(/\bimport\b/g, '<span style="color: #FF79C6;">import</span>')
                              .replace(/\breturn\b/g, '<span style="color: #FF79C6;">return</span>')
                              .replace(/(input)/g, '<span style="color: #50FA7B;">input</span>')
                              .replace(/(split)/g, '<span style="color: #50FA7B;">split</span>')
                              .replace(/(print)/g, '<span style="color: #50FA7B;">print</span>')
                              .replace(/(sorted)/g, '<span style="color: #50FA7B;">sorted</span>')
                              .replace(/(exit)/g, '<span style="color: #50FA7B;">exit</span>')
                              .replace(/(tuple)/g, '<span style="color: #9CCAF1;">tuple</span>')
                              .replace(/\bint\b/g, '<span style="color: #9CCAF1;">int</span>')
                              .replace(/(float)/g, '<span style="color: #9CCAF1;">float</span>')
                              .replace(/(map)/g, '<span style="color: #9CCAF1;">map</span>')
                              .replace(/(str)/g, '<span style="color: #9CCAF1;">str</span>')
                              .replace(/\brange\b/g, '<span style="color: #9CCAF1;">range</span>')
                              .replace(/(list)/g, '<span style="color: #9CCAF1;">list</span>')
                              .replace(/\bin\b/g, '<span style="color: #FF79C6;">in</span>')
                              .replace(/\b\d+\b/g, '<span style="color: #BD93F9;">$&</span>');
    displayContent.innerHTML = formattedText;
});

document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector('.container');
    const btnCopy = document.querySelector('#buttoncopy');
    const allBorder = document.getElementById('all');
    const borderElement = document.getElementById('border');
    const all_val = document.getElementById('all_val');
    const border_value = document.getElementById('border_value');
    const code = document.getElementById('code');
    const border_styleElement = document.getElementById('border_style');

    var all_radius = 10;
    var border_style = "solid";
    var border_size = 5;
    var coding = "";

    function allBorderUpdate() {
        all_radius = allBorder.value;
        border_size = borderElement.value;
        all_val.innerText = all_radius + "px";
        border_value.innerText = border_size + "px";
        coding = `
        border-radius : ${all_radius}px;
        border: ${border_size}px ${border_style} blue;
        `;
        code.value = coding;
        container.style.cssText = coding;
    }


    allBorder.addEventListener("mousemove", allBorderUpdate);
    allBorder.addEventListener("change", allBorderUpdate);

    borderElement.addEventListener("mousemove", allBorderUpdate);
    borderElement.addEventListener("change", allBorderUpdate);


    btnCopy.addEventListener('click', () => {
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert("code copied");
    });

    allBorderUpdate();

    border_styleElement.addEventListener('change', function () {
        border_style = this.value;
        allBorderUpdate();
    });


});
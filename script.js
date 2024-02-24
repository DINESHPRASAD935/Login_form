document.addEventListener('DOMContentLoaded', function () {
    const sourceInput = document.getElementById('source');
    const destinationInput = document.getElementById('destination');
    const saveSettingsSelect = document.getElementById('saveSettings');
    const compressSettingsSelect = document.getElementById('compressSettings');
    const totalFilesSpan = document.getElementById('total-files');
    const totalSizeSpan = document.getElementById('total-size');
    const backButton = document.getElementById('back');
    const compressButton = document.getElementById('compress');
    const exitButton = document.getElementById('exit');

    
    sourceInput.addEventListener('change', updateFileDetails);

    
    destinationInput.addEventListener('change', updateFileDetails);

    
    function updateFileDetails() {
        let totalFiles = 0;
        let totalSize = 0;
        const sourceFiles = sourceInput.files;
        const destinationFiles = destinationInput.files;

        
        if (sourceFiles) {
            totalFiles += sourceFiles.length;
            for (const file of sourceFiles) {
                totalSize += file.size;
            }
        }


        totalFilesSpan.textContent = totalFiles;
        totalSizeSpan.textContent = (totalSize /(1024*1024)).toFixed(2) +'MB'; // CONVERTS BYTES TO MB
    }

    compressButton.addEventListener('click', compressFiles);

    function compressFiles() {
        alert('Files compressed successfully!');
    }

    exitButton.addEventListener('click', exitTool);

    function exitTool() {
        alert('Exiting tool...');
    }

    backButton.addEventListener('click', goBack);

    
    function goBack() {
        alert('Going back...');
    }
});
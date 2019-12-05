const cloudName = 'elukas';
const unsignedUploadPreset = 'testUpload';
const fileUploader = {


    // const fileSelect = document.getElementById("fileSelect"),
    // fileElem = document.getElementById("fileElem"),



// *********** Upload file to Cloudinary ******************** //
uploadFile (file) {
    let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    let xhr = new XMLHttpRequest();
    let fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // Reset the upload progress bar
    document.getElementById('progress').style.width = 0;

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener("progress", function (e) {
        let progress = Math.round((e.loaded * 100.0) / e.total);
        document.getElementById('progress').style.width = progress + "%";

        console.log(`fileuploadprogress data.loaded: ${e.loaded},
  data.total: ${e.total}`);
    });

    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // File uploaded successfully
            let response = JSON.parse(xhr.responseText);
            // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
            let url = response.secure_url;
            // Create a thumbnail of the uploaded image, with 150px width
            let tokens = url.split('/');
            tokens.splice(-2, 0, 'w_150,c_scale');
            let img = new Image(); // HTML5 Constructor
            img.src = tokens.join('/');
            img.alt = response.public_id;
            document.getElementById('gallery').appendChild(img);
        }
    };

    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', file);
    xhr.send(fd);
},

// *********** Handle selected files ******************** //
handleFiles (files) {
    // for (let i = 0; i < files.length; i++) {
        this.uploadFile(files); // call the function to upload the file
    // }
}
}

export default fileUploader
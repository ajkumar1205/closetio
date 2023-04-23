import React from 'react'

const Aisle = (props) => {
  return (
    <div class="aisle">
        <div class="headings"><h3>{props.Item}</h3></div>
        <main class="app">
            <div class="header">
                <h3>Upload {props.Item}</h3>
                <div class="server-message"></div>
            </div>
            <div class="input-div">
                <p>Drag & Drop your {props.Item} or <span class="browse">Browse</span></p>
                <input type="file" class ="file" multiple="multiple" accept="image/png, image/jpeg, image/webp, image/jpg" onchange="previewImage(event)" />
            </div>
            <form id="saved-form">
                <div class="header"><h3>{props.Item}</h3>
                    <button className='button' type="submit">Delete</button>
                </div>
                <div class="saved-div"></div>
            </form>
            <form id="queued-form">
                <div class="header"><h3>Preview</h3>
                    <button className='button' type="submit">Upload</button>
                </div>
                <div class="queued-div"></div>
            </form>
        </main>
    </div>
  )
}

export default Aisle

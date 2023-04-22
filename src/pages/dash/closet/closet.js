import React from 'react'
import PageHeader from '../../../components/PageHeader'
import './closet.css'
import Aisle from './aisle'

const Closet = () => {
  return (
    <div className='content'>
      
        <PageHeader white="Your" gradient="Closet"/>
        <div className='content1'>
        <Aisle Item="Topwear"/>
        <Aisle Item="Bottomwear"/>
        <Aisle Item="Footwear"/>
        <Aisle Item="Accessories"/>
{/*     
        <div class="aisle">
                    <div class="headings"><h3>Topwear</h3></div>
                    <main class ="app">
                        <div class="header">
                            <h3>Upload Topwear</h3>
                            <div class="server-message"></div>
                        </div>
                        <div class="input-div">
                            <p>Drag & Drop your Topwear or <span class="browse">Browse</span></p>
                            <input type="file" class ="file" multiple="multiple" accept="image/png, image/jpeg, image/webp, image/jpg" onchange="previewImage(event)" />
                        </div>
                        <form id="saved-form">
                            <div class="header">
                                <h3>Topwear</h3>
                                <button type="submit">Delete</button>
                            </div>
                            <div class="saved-div"></div>
                        </form>
                        <form id="queued-form">
                            <div class="header">
                                <h3>Preview</h3>
                                <button type="submit">Upload</button>
                            </div>
                            <div class="queued-div"></div>
                        </form>
                    </main>
                </div> */}
        </div>
     
    </div>
  )
}

export default Closet

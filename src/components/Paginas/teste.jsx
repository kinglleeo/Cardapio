import React from 'react'
import './teste.css'

export default function teste(){

    const handlechange =()=>{

    }
    return(
        <div className='teste-main'>
            <div className='caxinha-do-teste'>
            <div class="radio-input">
  <div class="glass">
    <div class="glass-inner">
    </div>
  </div>
  <div class="selector">
    <div class="choice">
      <div>
        <input type="radio" id="one" name="number-selector" value="one" checked="true" class="choice-circle"/>
        <div class="ball"></div>
      </div>
      <label class="choice-name" for="one">1</label>
    </div>
    <div class="choice">
      <div>
        <input type="radio" id="two" name="number-selector" value="two" class="choice-circle"/>
        <div class="ball"></div>
      </div>
      <label class="choice-name">2</label>
    </div>
    <div class="choice">
      <div>
        <input type="radio" id="three" name="number-selector" value="three" class="choice-circle"/>
        <div class="ball"></div>
      </div>
      <label class="choice-name" for="three">3</label>
    </div>
  </div>
</div>
            </div>
        </div>
    )
}
import React from 'react'
import './Feedback.css'
function Feedback() {
  return (
    <div className="container-acd">
      <h1>Feedback</h1>

      <form action="/submit-survey" method="post" className="survey-form">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label for="number">Mobile number</label>
        <input type="number" id="number" name="number" required />
        <p>1-Have you ever used products of …………………. Not yet?</p>
        <input type="checkbox" id="never" name="jewelryType" value="never" />
        <label for="never">Never used</label><br />
        <input type="checkbox" id="using" name="jewelryType" value="using" />
        <label for="using">Using</label><br />
        <input type="checkbox" id="used" name="jewelryType" value="used" />
        <label for="used">Used before</label><br />
        <input type="checkbox" id="another" name="jewelryType" value="another " />
        <label for="another">Another idea</label><br />

        <p>2-How often do you purchase jewelry for yourself or for others?</p>
        <input type="checkbox" id="rarely" name="jewelryType" value="rarely" />
        <label for="rarely">Rarely</label><br />
        <input type="checkbox" id="occasionally" name="jewelryType" value="occasionally" />
        <label for="occasionally">Occasionally</label><br />
        <input type="checkbox" id="regularly" name="jewelryType" value="regularly" />
        <label for="regularly">Regularly</label><br />

        <p>3-Which type of jewelry do you wear most often?</p>
        <input type="checkbox" id="rings" name="jewelryType" value="rings" />
        <label for="rings">Rings</label><br />
        <input type="checkbox" id="bracelets" name="jewelryType" value="bracelets" />
        <label for="bracelets">Bracelets</label><br />
        <input type="checkbox" id="necklaces" name="jewelryType" value="necklaces" />
        <label for="necklaces">Necklaces</label><br />

        <p>4-Where do you prefer to purchase jewelry?</p>
        <input type="checkbox" id="online" name="jewelryType" value="online" />
        <label for="online">Online</label><br />
        <input type="checkbox" id="localstores" name="jewelryType" value="localstores" />
        <label for="localstores">Local stores</label><br />
        <input type="checkbox" id="other" name="jewelryType" value="other" />
        <label for="other">Other</label><br />

        <p>5-What factors are most important to you when purchasing jewelry?</p>
        <input type="checkbox" id="quality" name="jewelryType" value="quality" />
        <label for="quality">Quality</label><br />
        <input type="checkbox" id="price" name="jewelryType" value="price" />
        <label for="price">Price</label><br />
        <input type="checkbox" id="design" name="jewelryType" value="design" />
        <label for="design">Design</label><br />
        <input type="checkbox" id="brand" name="jewelryType" value="brand" />
        <label for="brand">Brand</label><br />

        <p>6-What style of jewelry do you most prefer?</p>
        <input type="checkbox" id="classNameic" name="jewelryType" value="classNameic" />
        <label for="classNameic">classNameic</label><br />
        <input type="checkbox" id="modern" name="jewelryType" value="modern" />
        <label for="modern">Modern</label><br />
        <input type="checkbox" id="vintage" name="jewelryType" value="vintage" />
        <label for="vintage">Vintage</label><br />
        <input type="checkbox" id="minimalistic" name="jewelryType" value="minimalistic" />
        <label for="minimalistic">Minimalistic</label><br />

        <p>7-What type of metal do you prefer for your jewelry?</p>
        <input type="checkbox" id="gold" name="jewelryType" value="gold" />
        <label for="gold">Gold</label><br />
        <input type="checkbox" id="silver" name="jewelryType" value="silver" />
        <label for="silver">Silver</label><br />
        <input type="checkbox" id="other" name="jewelryType" value="other" />
        <label for="other">Other</label><br />

        <p>8-In your opinion, the quality and time of processing support and resolving problems of ………………………. To be:</p>
        <input type="checkbox" id="fast" name="jewelryType" value="fast" />
        <label for="fast">Fast, timely, thorough</label><br />
        <input type="checkbox" id="acceptable" name="jewelryType" value="acceptable" />
        <label for="acceptable">Acceptable</label><br />
        <input type="checkbox" id="not" name="jewelryType" value="not" />
        <label for="not">Not timely or slow</label><br />
        <input type="checkbox" id="another" name="jewelryType" value="another " />
        <label for="another">Another idea</label><br />

        <p>9- According to you, the product price of ………………………. how?</p>
        <input type="checkbox" id="high" name="jewelryType" value="high" />
        <label for="high">High price</label><br />
        <input type="checkbox" id="reasonable" name="jewelryType" value="reasonable" />
        <label for="reasonable"> Reasonable price</label><br />
        <input type="checkbox" id="cheap" name="jewelryType" value="cheap" />
        <label for="cheap">Cheap price</label><br />

        <p>10-Did you encounter any problems during the process of purchasing and receiving the product?
        </p>
        <input type="checkbox" id="easy" name="jewelryType" value="easy" />
        <label for="easy">Easy and fast</label><br />
        <input type="checkbox" id="normal" name="jewelryType" value="normal" />
        <label for="normal">Normal</label><br />
        <input type="checkbox" id="still" name="jewelryType" value="still" />
        <label for="still">Still having problems</label><br />

        <p>11-Do you intend to continue using products of ………………………. Are not?</p>
        <input type="checkbox" id="will" name="jewelryType" value="will" />
        <label for="will">Will continue to use</label><br />
        <input type="checkbox" id="unplanned" name="jewelryType" value="unplanned" />
        <label for="unplanned">Unplanned</label><br />
        <input type="checkbox" id="willuse" name="jewelryType" value="willuse" />
        <label for="willuse">Will use another store's product</label><br />

        <p>12-Would you like to receive updates and special offers from us?</p>
        <input type="checkbox" id="yes" name="jewelryType" value="yes" />
        <label for="yes">Yes</label><br />
        <input type="checkbox" id="no" name="jewelryType" value="no" />
        <label for="no">No</label><br />

        <label for="comments">Comments</label>
        <textarea id="comments" name="comments"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Feedback
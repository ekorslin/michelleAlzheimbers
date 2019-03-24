import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  // Setting the component's initial state
  state = {
    date: "",
  };


  render() {
    return (
      <div>
        <h2>AD8 Dementia Screening Interview</h2>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Remember, "Yes, a change" indicates that there has been a change in the last several years caused by cognitive (thinking and memory) problems.</th>
                <th>YES, A Change</th>
                <th>NO, No Change</th>
                <th>N/A, Don't Know</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1. Problems with judgment (e.g., problems making decisions, bad financial decisions, problems with thinking)</td>
                <td><input type="radio" name="gender" value="male"/> YES</td>
                <td><input type="radio" name="gender" value="male"/> NO</td>
                <td><input type="radio" name="gender" value="male"/> Don't Know</td>
              </tr>
              <tr>
                <td>2. Less interest in hobbies/activies.</td>
                <td><input type="radio" name="gender" value="male"/> YES</td>
                <td><input type="radio" name="gender" value="male"/> NO</td>
                <td><input type="radio" name="gender" value="male"/> Don't Know</td>
              </tr>
              <tr>
                <td>3. Repeats the same things over and over (questions, stories, or statements)</td>
                <td><input type="radio" name="gender" value="male"/> YES</td>
                <td><input type="radio" name="gender" value="male"/> NO</td>
                <td><input type="radio" name="gender" value="male"/> Don't Know</td>
              </tr>
              <tr>
                <td>4. Trouble learning how to use a tool, appliance, or gadget (e.g., VCR, computer, microwave, remote control)</td>
                <td><input type="radio" name="gender" value="male"/> YES</td>
                <td><input type="radio" name="gender" value="male"/> NO</td>
                <td><input type="radio" name="gender" value="male"/> Don't Know</td>
              </tr>
              <tr>
                <td>5. Forgets correct month or year.</td>
                <td><input type="radio" name="gender" value="male"/> YES</td>
                <td><input type="radio" name="gender" value="male"/> NO</td>
                <td><input type="radio" name="gender" value="male"/> Don't Know</td>
              </tr>
              <tr>
                <td>6. Trouble handling complicated financial affairs (e.g. balancing checkbook, incomes taxes, paying bills)</td>
                <td><input type="radio" name="gender" value="male"/> YES</td>
                <td><input type="radio" name="gender" value="male"/> NO</td>
                <td><input type="radio" name="gender" value="male"/> Don't Know</td>
              </tr>
              <tr>
                <td>7. Trouble remembering appointments</td>
                <td><input type="radio" name="gender" value="male"/> YES</td>
                <td><input type="radio" name="gender" value="male"/> NO</td>
                <td><input type="radio" name="gender" value="male"/> Don't Know</td>
              </tr>
              <tr>
                <td>8. <text id="bold">Daily</text> problems with thinking and/or memory</td>
                <td><input type="radio" name="gender" value="male"/> YES</td>
                <td><input type="radio" name="gender" value="male"/> NO</td>
                <td><input type="radio" name="gender" value="male"/> Don't Know</td>
              </tr>
              <tr>
                <td>TOTAL AD8 SCORE</td>
                <td></td>
              </tr>
            </tbody>
          </table><br/>
          <text id="disclaimer">Adapted from Galvin JE et al, The AD8, a brief informant interview to detect dementia, Neurology 2005:65:559-564<br/>Copyright 2005.  THe AD8 is a copyrighted instrument of the Alzheimer's Disease Research Center, Washington University, St. Louis, Missouri.<br/>All Rights Reserved.</text>
      </div>
    );
  }
}


export default Home;

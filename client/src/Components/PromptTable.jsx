import React from 'react';

const PromptTable = () => {
    <div>
    <h1>Keyword Report and SEO Content Plan</h1>
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Keyword:</td>
          <td>{keyword}</td>
        </tr>
        <tr>
          <td>Search Volume:</td>
          <td>{searchVolume} searches per month</td>
        </tr>
        <tr>
          <td>Competitiveness:</td>
          <td>{competitiveness}</td>
        </tr>
      </tbody>
    </table>
    <p>
      You are tasked with creating a keyword report and SEO content plan for the keyword "{keyword}". The keyword has a monthly search volume of {searchVolume} and medium competitiveness. Use the information provided to conduct keyword research and develop an SEO content plan that includes blog posts, a product comparison page, and a buying guide. Outline the target keywords, word counts, and descriptions for each piece of content. Additionally, provide recommendations for on-page optimization and content promotion strategies. Finally, highlight the importance of monitoring and analyzing the performance of the content to make data-driven adjustments.
    </p>
  </div>
 
   
};

 


export default PromptTable;

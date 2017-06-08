import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// var RegClient = require('npm-registry-client')
// // var client = new RegClient({})
// // var uri = "https://registry.npmjs.org/npm"
// // var params = {timeout: 1000}

//
// // this is used to search the npm client registry

// const packages = [
//     {
//         "experiment_name": "Angling Risk Task",
//         "backend":"jspsych",
//         "description": 'none',
//         "experiment_id": "angling_risk_task",
//         "cognitive_atlas_task_id": "trm_5667488d52ccc",
//         "contributors": ["Jane Doe"],
//         "reference": "http://www.ncbi.nlm.nih.gov/pubmed/18194061",
//         "publish":"True",
//         "component": class Angling extends Component {
//           render () {
//             return <h2>Works!</h2>
//           }
//         }
//    },
//
//    {
//        "experiment_name": "Antisaccade",
//        "backend":"jspsych",
//        "description": "Condition indicates the location of the target stimulus",
//        "cognitive_atlas_task_id": "tsk_4a57abb949869",
//        "contributors": ["Jane Doe"],
//        "reference": "http://www.sciencedirect.com/science/article/pii/S001002859990734X",
//        "publish":"True",
//        "component": class Angling extends Component {
//          render () {
//            return <h2>Works 2!</h2>
//          }
//        }
//   },
//
//   {
//       "experiment_name": "Attention Network Task",
//       "backend":"jspsych",
//       "description": "Condition indicates the location of the target stimulus",
//       "cognitive_atlas_task_id": "trm_551f0857e1db8",
//       "contributors": ["Jane Doe"],
//       "reference": "http://www.mitpressjournals.org/doi/pdf/10.1162/089892902317361886",
//       "publish":"True",
//       "component": class Angling extends Component {
//         render () {
//           return <h2>Works for {this.props.author}!</h2>
//         }
//       }
//  }
// ];


// export default class Experiments extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       active: null
//     }
//   }
//   render () {
//     return (
//       <div>
//         {
//           packages.map(pkg =>
//             <li key={ pkg.experiment_name }>
//               {pkg.experiment_name}
//               { this.state.active === pkg.experiment_name ? <pkg.component author="Teon PHD"/> : null }
//               <button onClick={ () => this.setState({ active: pkg.experiment_name }) }>Play</button>
//             </li>
//           )
//         }
//       </div>
//     )
//   }
// }

export default class Experiments extends Component {
  constructor (props) {
    super(props);
    this.state = {
      active: null,
      results: []
    }
  }

  componentDidMount() {
    fetch("http://npmsearch.com/query?q=keywords:openbci&name", {
      method: 'get'}).then(function(response) {
        return response.json()
    }).then((packages) => {
      console.log('packages', packages)
      this.setState({results: packages && packages.results })
    }).catch(function(err) {
      // Error :(
    });
  }

  render () {
    let { results } = this.state
    console.log('results', results)

    return (
      <div>
        {
          results.map(pkg =>
            <li key={ pkg.keywords }>
              {pkg.keywords}
              <button onClick={ () => this.setState({ active: pkg.keywords }) }>Play</button>
            </li>
          )
        }
        testing
      </div>
    )
  }
}

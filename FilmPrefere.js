import React, { Component } from 'react';

class FilmPrefere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      email: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
 
  onChange(e) {
     this.setState({
       [e.target.name]: e.target.value,
     });
    }
 submitForm(e) {
     e.preventDefault();
     const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
     };

     const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

     fetch(url, config)
     .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Le film a bien été enregisé avec l'ID ${res}!`);
        }
      }).catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout d\'un film');
      });
    }

    



render() {
    return (
<div className="FilmPrefere">
 <h1>Mon film préféré</h1>

 <form onSubmit={this.submitForm}>
   <fieldset>
     <legend>Informations</legend>
     <div className="form-data">
       <label htmlFor="lastname">Nom du film</label>
       <input
         type="text"
         id="lastname"
         name="lastname"
         onChange={this.onChange}
         value={this.state.lastname}
       />
     </div>

     <div className="form-data">
       <label htmlFor="firstname">Poster du film</label>
       <input
         type="url"
         id="firstname"
         name="firstname"
         onChange={this.onChange}
         value={this.state.firstname}
       />
     </div>

     <div className="form-data">
       <label htmlFor="email">Commentaire</label>
       <textarea
         type="text"
         id="email"
         name="email"
         onChange={this.onChange}
         value={this.state.email}
       />
     </div>
     <hr />
     <div className="form-data">
       <input type="submit" value="Envoyer" />
     </div>
   </fieldset>
 </form>
</div>
    )
}



}



export default FilmPrefere;
import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
//import ImageUploader from 'react-images-upload';

import ErrorField from '../../../components/ErrorField/ErrorField';
import axios from '../../../axios';
//import AddCategory from '../Category/AddCategory';

const VoitureSchema = Yup.object().shape({
    // image: Yup.string()
    //     .required('Veuillez insérer une image'),
    marque: Yup.string()
        .required('La marque ne doit pas être vide'),
    model: Yup.string()
        .required('Le model ne doit pas être vide'),
    places: Yup.string()
        .required('Le nombre de place ne doit pas être vide'),
    mode: Yup.string()
        .required('Le type ne doit pas être vide'),
    vitesse: Yup.string()
        .required('Le type de vitesse ne doit pas être vide'),
    climatisation: Yup.string()
        .required('La climatisation ne doit pas être vide'),
    portes: Yup.string()
        .required('Le nombre de portes ne doit pas être vide')
});

class AddVoiture extends Component {
    componentDidMount() {
        axios.get('/categories').then(response => {
            if (response.status === 200) {
                this.setState({
                    categories: response.data
                })
            }
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            image: null,
            marque: '',
            model: '',
            places: '',
            mode: '',
            vitesse: '',
            climatisation: '',
        }

    }

    onChange = event => {
        this.setState({
            image: event.target.files[0],
            loaded: 0,
        })
        console.log(event.target.files[0])
    }
    render() {
        const { categories } = this.state;
        console.log(this.props, categories)
        return (
            <div>
                <Formik
                    initialValues={{
                        image: null,
                        marque: '',
                        model: '',
                        places: '',
                        mode: '',
                        vitesse: '',
                        climatisation: '',
                        portes: '',
                        category: null
                    }}
                    validationSchema={VoitureSchema}
                    onSubmit={(values, { resetForm }) => {
                        // console.log(this.state.image)
                        const formData = new FormData();
                        formData.append('image', this.state.image)
                        formData.append('marque', values.marque)
                        formData.append('model', values.model)
                        formData.append('places', values.places)
                        formData.append('mode', values.mode)
                        formData.append('vitesse', values.vitesse)
                        formData.append('climatisation', values.climatisation)
                        formData.append('portes', values.portes)
                        formData.append('category', values.category)
                        axios.post('/voitures', formData).then(response => {
                            const { action } = this.props;
                            if (response.status === 201) {
                                action.toggleModal(false);
                                resetForm();
                                action.getVoiture();
                            }
                        })

                        // axios.get('/categories').then(response => {
                        //     if (response.status === 200) {
                        //         this.setState({
                        //             categories: response.data
                        //         })
                        //     }
                        // })
                    }
                    }
                >
                    {({ errors, touched }) => (
                        <Form
                            autoComplete="off">
                            <div>
                                <div className="mb-2 mr-4">
                                    <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                        Image
                            </label>
                                    <Field
                                        type="file"
                                        onChange={this.onChange}
                                        name="image"
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                                    <ErrorField errors={errors} touched={touched} row="image" />
                                </div>

                                <div className="flex">
                                    <div className="mb-2 mr-4">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                            Marque
                            </label>
                                        <Field
                                            name="marque"
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                                        <ErrorField errors={errors} touched={touched} row="marque" />
                                    </div>

                                    <div className="mb-2">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                            Modèle
                            </label>
                                        <Field
                                            name="model"
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                                        <ErrorField errors={errors} touched={touched} row="model" />
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                        Places
                            </label>
                                    <Field
                                        name="places"
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                                    <ErrorField errors={errors} touched={touched} row="places" />
                                </div>

                                <center>
                                    <div className="mb-2 ">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                            Type
                                    </label>

                                        <div >
                                            <label>
                                                <Field type="radio" name="mode" value="Essence" />
              Essence
            </label> &nbsp;
                                    <label>
                                                <Field type="radio" name="mode" value="Diesel" />
              Diesel
            </label>
                                            <ErrorField errors={errors} touched={touched} row="mode" />
                                        </div>
                                    </div>


                                    <div className="mb-2 ">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                            Vitesse
                                    </label>

                                        <div >
                                            <label>
                                                <Field type="radio" name="vitesse" value="Manuelle" />
              Manuelle
            </label>&nbsp;
                                    <label>
                                                <Field type="radio" name="vitesse" value="Automatique" />
              Automatique
            </label>
                                            <ErrorField errors={errors} touched={touched} row="vitesse" />
                                        </div>
                                    </div>

                                    <div className="mb-2 ">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                            Climatisation
                                    </label>

                                        <div >
                                            <label>
                                                <Field type="radio" name="climatisation" value="Oui" />
              Oui
            </label>&nbsp;
                                    <label>
                                                <Field type="radio" name="climatisation" value="Non" />
              Non
            </label>&nbsp;
                                    <ErrorField errors={errors} touched={touched} row="climatisation" />
                                        </div>
                                    </div>


                                    <div className="mb-2">
                                        <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                            Portes
                                    </label>

                                        <div>
                                            <label>
                                                <Field type="radio" name="portes" value="3" />
              3
            </label>&nbsp;
                                    <label>
                                                <Field type="radio" name="portes" value="4" />
              4
            </label>&nbsp;
                                    <label>
                                                <Field type="radio" name="portes" value="5" />
              5
            </label>&nbsp;
                                    <ErrorField errors={errors} touched={touched} row="portes" />
                                        </div>
                                    </div>
                                </center>



                                <div className="mb-2 ">
                                    <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                        Catégorie
                                    </label>
                                    <Field as="select" name="category">
                                        {categories && categories.map(category => {
                                            return <option value={category.id}>{category.category}</option>
                                        })}
                                    </Field>
                                </div>
                            </div>

                            <hr className="my-4" />
                            <div className="flex justify-end">
                                <button type="submit" className="text-white px-4 py-2 bg-blue-500 hover:bg-blue-400">Sauvegarder</button>
                            </div>
                            {/* <div className="mb-2 mr-4">
                                <label className="block text-gray-700 font-bold mb-1 md:mb-0">
                                    Category :
                        </label>
                                <Field
                                    name="Categorie"
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                            </div> */}
                        </Form>
                    )}
                </Formik>
            </div >)
    }
}

export default AddVoiture;
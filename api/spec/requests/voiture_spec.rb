# spec/requests/todos_spec.rb
require 'rails_helper'

RSpec.describe 'Voitures API', type: :request do
  # initialize test data
  let!(:voitures) { create_list(:voiture, 10) }
  let(:voiture_id) { voitures.first.id }

  # Test suite for GET /todos
  describe 'GET /voitures' do
    # make HTTP get request before each example
    before { get '/voitures' }

    it 'returns voitures' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /todos/:id
  describe 'GET /voitures/:id' do
    before { get "/voitures/#{voiture_id}" }

    context 'when the record exists' do
      it 'returns the todo' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(voiture_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:voiture_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Voiture/)
      end
    end
  end

  # Test suite for POST /voitures
  describe 'POST /voitures' do
    # valid payload
    let(:valid_attributes) { { marque: 'Toyota', model: 'Supra' } }

    context 'when the request is valid' do
      before { post '/voitures', params: valid_attributes }

      it 'creates a voiture' do
        expect(json['marque']).to eq('Toyota')
        expect(json['model']).to eq('Supra')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/voitures', params: { marque: 'Toyota' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Model can't be blank/)
      end
    end
  end

  # Test suite for PUT /voitures/:id
  describe 'PUT /voitures/:id' do
    let(:valid_attributes) { { title: 'Shopping' } }

    context 'when the record exists' do
      before { put "/voitures/#{voiture_id}", params: valid_attributes }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  # Test suite for DELETE /voitures/:id
  describe 'DELETE /voitures/:id' do
    before { delete "/voitures/#{voiture_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
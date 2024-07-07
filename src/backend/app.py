from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__, static_folder='static', static_url_path='')
CORS(app, origins=["http://localhost:8080"])

def create_category_items_dict(categories_df, items_df):
    category_items_dict = {}
    
    for _, row in categories_df.iterrows():
        category = row['Category']
        item = row['Item']
        
        category_items_dict.setdefault(category, {})[item] = items_df.loc[items_df['Name'] == item, 'Price'].values[0]
    
    return category_items_dict

@app.route('/inventory')  
def inventory():
    try:
        file_path = 'C:/Users/aahme/Documents/m-and-s-website/src/assets/inventory.xlsx'
        categories_df = pd.read_excel(file_path, sheet_name='Categories')
        items_df = pd.read_excel(file_path, sheet_name='Items')
        
        categories_df = pd.melt(categories_df, id_vars=['Category Name'], var_name='Category', value_name='Item')
        categories_df = categories_df.dropna(subset=['Item'])
        
        category_items_dict = create_category_items_dict(categories_df, items_df)
        
        return jsonify(category_items_dict)
    except Exception as e:
        return jsonify({"error": str(e)}), 500 

@app.route('/components/<path:path>')
def serve_components(path):
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react_app(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')
    
    
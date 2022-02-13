# Import Flask

from flask import Flask, render_template, redirect, url_for

folio = Flask(__name__)


@folio.route('/')
def index():
    return render_template('home2.html')


@folio.route('/architecture')
def architecture():
    return render_template('Architecture.html')


@folio.route('/computation')
def computation():
    return render_template('Computation_Design.html')

# @folio.route('/miscellaneous')
# def index():
#     return render_template('Miscellaneous.html')


@folio.route('/resilient_hub')
def resilient_hub():
    return render_template('Resilient_Hub.html')


@folio.route('/landscape_liquified')
def landscape_liquified():
    return render_template('Landscape_liquified.html')


@folio.route('/ilmi_museum')
def ilmi_museum():
    return render_template('ilmi_museum.html')

# Abstract expression route


@folio.route('/abstract_expression')
def abstract_expression():
    return render_template('abstract_expressionism.html')

# Agariya Dwelling Route


@folio.route('/agariya_dwelling')
def agariya_dwelling():
    return render_template('agariya_dwelling.html')

# Alice in Wonderland Route


@folio.route('/alice_in_wonderland')
def alice_in_wonderland():
    return render_template('alice_in_wonderland.html')

# Carbon Crunch Route


@folio.route('/carbon_crunch')
def carbon_crunch():
    return render_template('carbon_crunch.html')

# CBP Route


@folio.route('/cbp')
def cbp():
    return render_template('CBP.html')

# Classical consciousness Route


@folio.route('/classical_consciousness')
def classical_consciousness():
    return render_template('classical_consciousness.html')

# Generative Design Route


@folio.route('/generative_design')
def generative_design():
    return render_template('generative_design.html')

# Grid Interpolation Route


@folio.route('/grid_interpolation')
def grid_interpolation():
    return render_template('grid_interpolation.html')

# ML Hogwarts Route


@folio.route('/ml_hogwarts')
def ml_hogwarts():
    return render_template('ml_hogwarts.html')

# Pujiang Citizen Route


@folio.route('/pujiang_citizen')
def pujiang_citizen():
    return render_template('pujiang_citizen.html')

# Saltscraper Route


@folio.route('/saltscraper')
def saltscraper():
    return render_template('saltscraper.html')

# Snow Peak Route


@folio.route('/snow_peak')
def snow_peak():
    return render_template('snow_peak.html')

# Sustainable Hub Route


@folio.route('/sustainable_hub')
def sustainable_hub():
    return render_template('sustainable_hub.html')

# Twin City Route


@folio.route('/twin_city')
def twin_city():
    return render_template('twin_city.html')


if __name__ == '__main__':
    folio.run(debug=True)

from flask import Flask, request, jsonify
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import random
from datetime import timedelta

from models import db, User, Education, Experience, Projects, Blogs

app = Flask(__name__)
app.config["SECRET_KEY"] = "WERTYUIODFGHJK" + str(random.randint(1, 1000000))
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///portfolio.db"
app.config["JWT_SECRET_KEY"] = "WERTYUIODFGHJK" + str(random.randint(1, 1000000))
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=2) 
app.config['DEBUG'] = True

db.init_app(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)
bcrypt = Bcrypt(app)
CORS(app)


@app.route("/")
def index():
    return jsonify({"message": "This is Alex Kiprono's portfolio"})

@app.route('/register', methods=['POST'])
def register():
    email = request.json.get('email')
    password = request.json.get('password')

    if not email or not password:
        return jsonify({"error": "Missing email or password"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    user = User(email=email, password=hashed_password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201



@app.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    if not email or not password:
        return jsonify({"error": "Missing email or password"}), 400

    user = User.query.filter_by(email=email).first()
    if user and bcrypt.check_password_hash(user.password, password):
        access_token = create_access_token(identity=user.id)
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({"error": "Invalid email or password"}), 401



# current user
@app.route("/current_user", methods=["GET"])
@jwt_required()
def current_user():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    if user is None:
        return jsonify({"error": "User not found"}), 404

    return jsonify(user.serialize()), 200

@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    return jsonify({"message": "Hello, this is a protected endpoint"})

@app.route("/add_education", methods=["POST"])
@jwt_required()
def add_education():
    school = request.json.get("school")
    location = request.json.get("location")
    start_date = request.json.get("start_date")
    end_date = request.json.get("end_date")
    tags = request.json.get("tags")

    education = Education(school=school, location=location, start_date=start_date, end_date=end_date, tags=tags)
    db.session.add(education)
    db.session.commit()

    return jsonify({"message": "Education added successfully"})

@app.route("/get_education", methods=["GET"])
def get_education():
    education = Education.query.all()
    return jsonify([e.serialize() for e in education])  # Ensure serialize() method exists

@app.route("/update_education/<int:id>", methods=["PUT"])
@jwt_required()
def update_education(id):
    education = Education.query.get_or_404(id)

    school = request.json.get("school")
    location = request.json.get("location")
    start_date = request.json.get("start_date")
    end_date = request.json.get("end_date")
    tags = request.json.get("tags")

    education.school = school
    education.location = location
    education.start_date = start_date
    education.end_date = end_date
    education.tags = tags

    db.session.commit()

    return jsonify({"message": "Education updated successfully"})

@app.route("/delete_education/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_education(id):
    education = Education.query.get_or_404(id)
    db.session.delete(education)
    db.session.commit()

    return jsonify({"message": "Education deleted successfully"})

@app.route("/add_experience", methods=["POST"])  # Added leading slash
@jwt_required()
def add_experience():
    company = request.json.get("company")
    location = request.json.get("location")
    start_date = request.json.get("start_date")
    end_date = request.json.get("end_date")
    title = request.json.get("title")
    responsibilities = request.json.get("responsibilities")
    skills = request.json.get("skills")

    experience = Experience(company=company, location=location, start_date=start_date, end_date=end_date, title=title, responsibilities=responsibilities, skills=skills)
    db.session.add(experience)
    db.session.commit()

    return jsonify({"message": "Experience added successfully"})

@app.route("/get_experience", methods=["GET"])
def get_experience():
    experience = Experience.query.all()
    return jsonify([e.serialize() for e in experience])  # Ensure serialize() method exists

@app.route("/update_experience/<int:id>", methods=["PUT"])
@jwt_required()
def update_experience(id):
    experience = Experience.query.get_or_404(id)

    company = request.json.get("company")
    location = request.json.get("location")
    start_date = request.json.get("start_date")
    end_date = request.json.get("end_date")
    title = request.json.get("title")
    responsibilities = request.json.get("responsibilities")
    skills = request.json.get("skills")

    experience.company = company
    experience.location = location
    experience.start_date = start_date
    experience.end_date = end_date
    experience.title = title
    experience.responsibilities = responsibilities
    experience.skills = skills

    db.session.commit()

    return jsonify({"message": "Experience updated successfully"})

@app.route("/delete_experience/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_experience(id):
    experience = Experience.query.get_or_404(id)
    db.session.delete(experience)
    db.session.commit()

    return jsonify({"message": "Experience deleted successfully"})

@app.route('/add_project', methods=['POST'])
@jwt_required()
def add_project():
    title = request.json.get('title')
    image = request.json.get('image')
    url = request.json.get('url')
    description = request.json.get('description')
    technologies = request.json.get('technologies')

    project = Projects(title=title, image=image, url=url, description=description, technologies=technologies)
    db.session.add(project)
    db.session.commit()

    return jsonify({'message': 'Project added successfully'})

@app.route('/get_projects', methods=['GET'])
def get_projects():
    projects = Projects.query.all()
    return jsonify([p.serialize() for p in projects])  # Ensure serialize() method exists

@app.route('/update_project/<int:id>', methods=['PUT'])
@jwt_required()
def update_project(id):
    project = Projects.query.get_or_404(id)

    title = request.json.get('title')
    image = request.json.get('image')
    url = request.json.get('url')
    description = request.json.get('description')
    technologies = request.json.get('technologies')

    project.title = title
    project.image = image
    project.url = url
    project.description = description
    project.technologies = technologies

    db.session.commit()

    return jsonify({'message': 'Project updated successfully'})

@app.route('/delete_project/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_project(id):
    project = Projects.query.get_or_404(id)
    db.session.delete(project)
    db.session.commit()

    return jsonify({'message': 'Project deleted successfully'})

@app.route('/add_blogpost', methods=['POST'])  # Added leading slash
@jwt_required()
def add_blogpost():
    title = request.json.get('title')
    content = request.json.get('content')
    image = request.json.get('image')
    date_published = request.json.get('date_published')

    blogpost = Blogs(title=title, content=content, image=image, date_published=date_published)
    db.session.add(blogpost)
    db.session.commit()

    return jsonify({'message': 'Blog post added successfully'})

@app.route('/get_blogposts', methods=['GET'])
def get_blogposts():
    blogposts = Blogs.query.all()
    return jsonify([b.serialize() for b in blogposts])  # Ensure serialize() method exists

@app.route('/update_blogpost/<int:id>', methods=['PUT'])
@jwt_required()
def update_blogpost(id):
    blogpost = Blogs.query.get_or_404(id)

    title = request.json.get('title')
    content = request.json.get('content')
    image = request.json.get('image')
    date_published = request.json.get('date_published')

    blogpost.title = title
    blogpost.content = content
    blogpost.image = image
    blogpost.date_published = date_published

    db.session.commit()

    return jsonify({'message': 'Blog post updated successfully'})

@app.route('/delete_blogpost/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_blogpost(id):
    blogpost = Blogs.query.get_or_404(id)
    db.session.delete(blogpost)
    db.session.commit()

    return jsonify({'message': 'Blog post deleted successfully'})

if __name__ == "__main__":
    app.run(debug=True)

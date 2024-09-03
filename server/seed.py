from models import db, User, Education, Experience, Projects, Blogs
from app import app, bcrypt
from datetime import datetime, timedelta

def seed_data():
    with app.app_context():
        # Drop and create all tables
        db.drop_all()
        db.create_all()

        # Hash password
        password = bcrypt.generate_password_hash('password').decode('utf-8')

        # Users data
        users = [
            User(email='alice.johnson@example.com', password=password),
        ]

        # Add users to the session and commit
        for user in users:
            db.session.add(user)
        db.session.commit()

        # Education data
        educations = [
            Education(school='Harvard University', location='Cambridge, MA', start_date=datetime(2010, 9, 1), end_date=datetime(2014, 6, 30), tags='Computer Science'),
            Education(school='Stanford University', location='Stanford, CA', start_date=datetime(2012, 9, 1), end_date=datetime(2016, 6, 30), tags='Electrical Engineering'),
            Education(school='MIT', location='Cambridge, MA', start_date=datetime(2015, 9, 1), end_date=datetime(2019, 6, 30), tags='Mechanical Engineering')
        ]

        # Add education entries to the session and commit
        for education in educations:
            db.session.add(education)
        db.session.commit()

        # Experience data
        experiences = [
            Experience(company='Google', location='Mountain View, CA', start_date=datetime(2014, 7, 1), end_date=datetime(2017, 6, 30), title='Software Engineer', responsibilities='Developing scalable applications.', skills='Python, JavaScript'),
            Experience(company='Facebook', location='Menlo Park, CA', start_date=datetime(2017, 7, 1), end_date=datetime(2020, 6, 30), title='Product Manager', responsibilities='Overseeing product development.', skills='Project Management, Agile'),
            Experience(company='Apple', location='Cupertino, CA', start_date=datetime(2020, 7, 1), end_date=None, title='Senior Engineer', responsibilities='Leading engineering projects.', skills='Swift, Objective-C')
        ]

        # Add experience entries to the session and commit
        for experience in experiences:
            db.session.add(experience)
        db.session.commit()

        # Projects data
        projects = [
            Projects(title='Project A', image='https://media.istockphoto.com/id/1913125761/photo/silhouettes-of-people-dancing-and-rising-hands-at-open-air-summer-festival.jpg?s=612x612&w=is&k=20&c=bES8lAAFylj0RoXpcwCCn3QT0QLLIA4Gj3_m5fg2A8g=', url='http://example.com/project-a', description='Description for Project A', technologies='Python, Django'),
            Projects(title='Project B', image='https://media.istockphoto.com/id/1913125761/photo/silhouettes-of-people-dancing-and-rising-hands-at-open-air-summer-festival.jpg?s=612x612&w=is&k=20&c=bES8lAAFylj0RoXpcwCCn3QT0QLLIA4Gj3_m5fg2A8g=', url='http://example.com/project-b', description='Description for Project B', technologies='JavaScript, React'),
            Projects(title='Project C', image='https://media.istockphoto.com/id/1913125761/photo/silhouettes-of-people-dancing-and-rising-hands-at-open-air-summer-festival.jpg?s=612x612&w=is&k=20&c=bES8lAAFylj0RoXpcwCCn3QT0QLLIA4Gj3_m5fg2A8g=', url='http://example.com/project-c', description='Description for Project C', technologies='Java, Spring Boot')
        ]

        # Add projects to the session and commit
        for project in projects:
            db.session.add(project)
        db.session.commit()

        # Blogs data
        blogs = [
            Blogs(title='Blog Post 1', image='https://media.istockphoto.com/id/1913125761/photo/silhouettes-of-people-dancing-and-rising-hands-at-open-air-summer-festival.jpg?s=612x612&w=is&k=20&c=bES8lAAFylj0RoXpcwCCn3QT0QLLIA4Gj3_m5fg2A8g=', content='Content for Blog Post 1', date_published=datetime(2024, 1, 1)),
            Blogs(title='Blog Post 2', image='https://media.istockphoto.com/id/1913125761/photo/silhouettes-of-people-dancing-and-rising-hands-at-open-air-summer-festival.jpg?s=612x612&w=is&k=20&c=bES8lAAFylj0RoXpcwCCn3QT0QLLIA4Gj3_m5fg2A8g=', content='Content for Blog Post 2', date_published=datetime(2024, 2, 1)),
            Blogs(title='Blog Post 3', image='https://media.istockphoto.com/id/1913125761/photo/silhouettes-of-people-dancing-and-rising-hands-at-open-air-summer-festival.jpg?s=612x612&w=is&k=20&c=bES8lAAFylj0RoXpcwCCn3QT0QLLIA4Gj3_m5fg2A8g=', content='Content for Blog Post 3', date_published=datetime(2024, 3, 1))
        ]

        # Add blogs to the session and commit
        for blog in blogs:
            db.session.add(blog)
        db.session.commit()

    print("Database seeded!")

if __name__ == "__main__":
    seed_data()

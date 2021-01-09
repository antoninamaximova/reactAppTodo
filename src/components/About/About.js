import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';
import styles from './About.module.css';
import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const octokit = new Octokit();
library.add(fab)

class About extends React.Component {	
	state = {
		isLoading: true,
		repoList: [],
		user: [],
		fetchFailure: false
	}

	componentDidMount() {
		octokit.repos.listForUser({
			username: 'antoninamaximova'
		}).then(({data}) => {
			this.setState({
			repoList: data,
			isLoading: false
			});
		}).catch(() => {
			this.setState({
				isLoading: false,
				isError: true,
				Texting: 'Ошибка запроса к серверу либо пользователь не найден.'
			})
		})

		octokit.users.getByUsername({
			username: 'antoninamaximova'
		}).then(({data}) => {
			this.setState({
			user: data,
			isLoading: false
			});
		})
	}

	render() {
		const { isLoading, repoList, isError, Texting, user } = this.state;
		return (<div>
					{ isLoading ? <CircularProgress /> : <div>
						{isError ? <div>{Texting}</div> : <div>
						<Card className={styles.wrap}>
							<img src={ user.avatar_url} className={styles.avatar} alt='Аватар'></img>
							<div>
								<h1 className={styles.list}>{user.name}</h1>
								<p className={styles.paragraph}>{user.bio}</p>
								<p className={styles.paragraph}>{user.email}</p>
							</div>
							<div>
								<a href='https://github.com/antoninamaximova/' className={styles.link}>
									<FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
								</a>
								<a href='https://www.instagram.com/antoninamaximova/' className={styles.link}>
									<FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/>
								</a>
							</div>
						</Card>
					 <Card><h2>Репозитории на github.com:</h2>
					 <div>
					 	{!isLoading && <div><ol>
							{repoList.map(repo => 
									(<Card className={styles.repo}><li key={repo.id} src={repo.url}> <a href={repo.html_url} className={styles.link}> {repo.name }</a><p className={styles.paragraph}>{repo.language }</p></li></Card>))
							} 
					 	</ol>
					 	</div>}
					 	</div>
					 	</Card>
					 	
					 	</div>}
					 </div>}
				</div>)
	}
}


export default About;
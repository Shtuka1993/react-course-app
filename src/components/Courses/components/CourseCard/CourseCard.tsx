import * as types from 'src/types';

import styles from './CourseCard.module.css';

import { Button } from 'src/common/Button/Button';

import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { formatCreationDate } from 'src/helpers/formatCreationDate';
import { formatAuthorsData } from 'src/helpers/formatAuthorsData';

import { AUTHORS, CREATED, DURATION, SHOW_COURSE } from 'src/constants';

export default function CourseCard(props: types.CourseCardProps) {
	const { course, onShowCourseClick } = props;

	return (
		<div className={styles.courseCard}>
			<h2 className='courseTitle'>{course.title}</h2>
			<div className='courseCardContent'>
				<div>
					<p>{course.description}</p>
				</div>
				<div>
					<ul>
						<li>
							<b className='title'>{AUTHORS}:</b>
							{formatAuthorsData(course.authors)}
						</li>
						<li>
							<b className='title'>{DURATION}:</b>
							{getCourseDuration(course.duration)}
						</li>
						<li>
							<b className='title'>{CREATED}:</b>
							{formatCreationDate(course.creationDate)}
						</li>
					</ul>
					<Button
						text={SHOW_COURSE}
						onClick={() => onShowCourseClick(course.id)}
					/>
				</div>
			</div>
		</div>
	);
}

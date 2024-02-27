import * as React from 'react';

import Button from 'src/common/Button/Button';

import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { formatCreationDate } from 'src/helpers/formatCreationDate';
import { formatAuthorsData } from 'src/helpers/formatAuthorsData';

import { AUTHORS, CREATED, DURATION, SHOW_COURSE } from 'src/constants';

interface courseCardProps {
	course: any;
	setShowInfo?: (state: boolean) => void;
	setCourseId?: (id: string) => void;
}

export default function CourseCard(props: courseCardProps) {
	const { course, setShowInfo, setCourseId } = props;

	const showInfoAction = () => {
		setShowInfo(true);
		setCourseId(course.id);
	};
	return (
		<>
			<div>
				<h3>{course.title}</h3>
				<p>{course.description}</p>
			</div>
			<div>
				<ul>
					<li>
						<b>{AUTHORS}:</b>
						{formatAuthorsData(course.authors)}
					</li>
					<li>
						<b>{DURATION}:</b>
						{getCourseDuration(course.duration)}
					</li>
					<li>
						<b>{CREATED}:</b>
						{formatCreationDate(course.creationDate)}
					</li>
				</ul>
				<Button text={SHOW_COURSE} onClick={showInfoAction} />
			</div>
		</>
	);
}

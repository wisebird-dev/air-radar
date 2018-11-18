import styled from 'styled-components';

const List = styled.ul`
	position: relative;
	list-style: none;
	margin-left: 0;
	padding-left: 1.2em;
	padding-bottom: 12px;

li:before {
    content: "›";
	position: absolute;
	left: 0;
}
`;

export default List;

import React from 'react'

export const ExpandIcon = ({ size = 16, color = '#000000' }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 16 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M15 8H7.41L9.71 5.71C9.80324 5.61676 9.8772 5.50607 9.92766 5.38425C9.97812 5.26243 10.0041 5.13186 10.0041 5C10.0041 4.86814 9.97812 4.73757 9.92766 4.61575C9.8772 4.49393 9.80324 4.38324 9.71 4.29C9.61676 4.19676 9.50607 4.1228 9.38425 4.07234C9.26243 4.02188 9.13186 3.99591 9 3.99591C8.86814 3.99591 8.73757 4.02188 8.61575 4.07234C8.49393 4.1228 8.38324 4.19676 8.29 4.29L4.29 8.29C4.19896 8.3851 4.12759 8.49725 4.08 8.62C3.97998 8.86346 3.97998 9.13654 4.08 9.38C4.12759 9.50275 4.19896 9.6149 4.29 9.71L8.29 13.71C8.38296 13.8037 8.49356 13.8781 8.61542 13.9289C8.73728 13.9797 8.86799 14.0058 9 14.0058C9.13201 14.0058 9.26272 13.9797 9.38458 13.9289C9.50644 13.8781 9.61704 13.8037 9.71 13.71C9.80373 13.617 9.87812 13.5064 9.92889 13.3846C9.97966 13.2627 10.0058 13.132 10.0058 13C10.0058 12.868 9.97966 12.7373 9.92889 12.6154C9.87812 12.4936 9.80373 12.383 9.71 12.29L7.41 10H15C15.2652 10 15.5196 9.89464 15.7071 9.70711C15.8946 9.51957 16 9.26522 16 9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8ZM1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18C1.26522 18 1.51957 17.8946 1.70711 17.7071C1.89464 17.5196 2 17.2652 2 17V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0Z"
			fill={color}
		/>
	</svg>
)

export const CollapseIcon = ({ size = 16, color = '#000000' }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 16 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1 8H8.59L6.29 5.71C6.19676 5.61676 6.1228 5.50607 6.07234 5.38425C6.02188 5.26243 5.99591 5.13186 5.99591 5C5.99591 4.86814 6.02188 4.73757 6.07234 4.61575C6.1228 4.49393 6.19676 4.38324 6.29 4.29C6.38324 4.19676 6.49393 4.1228 6.61575 4.07234C6.73757 4.02188 6.86814 3.99591 7 3.99591C7.13186 3.99591 7.26243 4.02188 7.38425 4.07234C7.50607 4.1228 7.61676 4.19676 7.71 4.29L11.71 8.29C11.801 8.3851 11.8724 8.49725 11.92 8.62C12.02 8.86346 12.02 9.13654 11.92 9.38C11.8724 9.50275 11.801 9.6149 11.71 9.71L7.71 13.71C7.61704 13.8037 7.50644 13.8781 7.38458 13.9289C7.26272 13.9797 7.13201 14.0058 7 14.0058C6.86799 14.0058 6.73728 13.9797 6.61542 13.9289C6.49356 13.8781 6.38296 13.8037 6.29 13.71C6.19627 13.617 6.12188 13.5064 6.07111 13.3846C6.02034 13.2627 5.9942 13.132 5.9942 13C5.9942 12.868 6.02034 12.7373 6.07111 12.6154C6.12188 12.4936 6.19627 12.383 6.29 12.29L8.59 10H1C0.734784 10 0.480429 9.89464 0.292892 9.70711C0.105356 9.51957 0 9.26522 0 9C0 8.73478 0.105356 8.48043 0.292892 8.29289C0.480429 8.10536 0.734784 8 1 8ZM15 0C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V17C16 17.2652 15.8946 17.5196 15.7071 17.7071C15.5196 17.8946 15.2652 18 15 18C14.7348 18 14.4804 17.8946 14.2929 17.7071C14.1054 17.5196 14 17.2652 14 17V1C14 0.734784 14.1054 0.48043 14.2929 0.292893C14.4804 0.105357 14.7348 0 15 0Z"
			fill={color}
		/>
	</svg>
)

export const FileText = ({ size = 18, color = '#000000' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
		<path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
	</svg>
)

export const FolderCloseIcon = ({ size = 18, fill = '#6A91EE' }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 40 35"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M21.2892 5.5144H38.6677C39.4031 5.5144 40 6.11055 40 6.84671V12.4375L40 30.9856C40 33.1948 38.2092 34.9856 36 34.9856H4.00005C1.79091 34.9856 5.06512e-05 33.1948 5.06512e-05 30.9856V4.12977C5.06512e-05 1.92063 1.79092 0.129764 4.00006 0.129767L13.3261 0.129782C14.6179 0.129784 15.8302 0.753646 16.5811 1.80483L18.0343 3.83935C18.7852 4.89054 19.9974 5.5144 21.2892 5.5144Z"
			fill={fill}
		/>
	</svg>
)

export const FolderOpenIcon = ({ size = 18, fill = '#6A91EE' }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 16 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12.7789 13.4655H0.431641C0.147504 13.4655 -0.0591161 13.1957 0.0150906 12.9212L2.8195 5.23271C2.87026 5.04458 3.04101 4.91382 3.23605 4.91382H15.5833C15.8675 4.91382 15.9999 5.18527 15.9999 5.45809L13.1955 13.1466C13.1447 13.3348 12.974 13.4655 12.7789 13.4655Z"
			fill={fill}
		/>
		<path
			d="M6.89653 2.43104H13.867C14.1307 2.43104 14.3448 2.64483 14.3448 2.90883V4.91379H3.23585C3.04082 4.91379 2.87006 5.04427 2.8193 5.23269L0.0565516 12.7676C0.0380689 12.7665 0.0190344 12.7654 0 12.7648L1.52025e-05 2.5C1.68384e-05 1.39543 0.895449 0.5 2.00002 0.500003L5.51723 0.500009L6.89653 2.43104Z"
			fill="#5479D2"
		/>
	</svg>
)

export const TrashIcon = ({ size = 18, color = '#000000' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<polyline points="3 6 5 6 21 6"></polyline>
		<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
		<line x1="10" y1="11" x2="10" y2="17"></line>
		<line x1="14" y1="11" x2="14" y2="17"></line>
	</svg>
)

export const InfoIcon = ({ size = 18, color = '#000000' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="12" cy="12" r="10"></circle>
		<line x1="12" y1="16" x2="12" y2="12"></line>
		<line x1="12" y1="8" x2="12" y2="8"></line>
	</svg>
)

export const ChevronLeftIcon = ({ size = 18, color = '#000000' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M15 18l-6-6 6-6" />
	</svg>
)

export const ChevronRightIcon = ({ size = 18, color = '#000000' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="2.5"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M9 18l6-6-6-6" />
	</svg>
)

export const ListIcon = ({ size = 18, color = '#000000' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<line x1="8" y1="6" x2="21" y2="6"></line>
		<line x1="8" y1="12" x2="21" y2="12"></line>
		<line x1="8" y1="18" x2="21" y2="18"></line>
		<line x1="3" y1="6" x2="3" y2="6"></line>
		<line x1="3" y1="12" x2="3" y2="12"></line>
		<line x1="3" y1="18" x2="3" y2="18"></line>
	</svg>
)

export const GridIcon = ({ size = 18, color = '#000000' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<rect x="3" y="3" width="7" height="7"></rect>
		<rect x="14" y="3" width="7" height="7"></rect>
		<rect x="14" y="14" width="7" height="7"></rect>
		<rect x="3" y="14" width="7" height="7"></rect>
	</svg>
)

export const CloseIcon = ({ size = 18, color = '#000000' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="12" cy="12" r="10"></circle>
		<line x1="15" y1="9" x2="9" y2="15"></line>
		<line x1="9" y1="9" x2="15" y2="15"></line>
	</svg>
)

export const ArrowDown = ({ size = 16, color = '#000000' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="2.5"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M6 9l6 6 6-6" />
	</svg>
)

export const ArrowUp = ({ size = 16, color = '#000000' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="2.5"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M18 15l-6-6-6 6" />
	</svg>
)

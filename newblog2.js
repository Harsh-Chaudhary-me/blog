document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create a new blog post element
    const post = document.createElement('div');
    post.classList.add('post');

    post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button class="likeBtn">Like (<span class="likeCount">0</span>)</button>
        <div class="comments">
            <h4>Comments:</h4>
            <ul class="commentList"></ul>
            <input type="text" class="commentInput" placeholder="Add a comment">
            <button class="addCommentBtn">Add Comment</button>
        </div>
    `;

    // Append the new post to the blogPosts section
    document.getElementById('blogPosts').appendChild(post);

    // Clear the form
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';

    // Add functionality to the like button (limit to one like per user)
    let liked = false;
    const likeBtn = post.querySelector('.likeBtn');
    const likeCount = post.querySelector('.likeCount');
    
    likeBtn.addEventListener('click', function() {
        if (!liked) {
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
            liked = true;
        } else {
            alert("You've already liked this post.");
        }
    });

    // Add functionality to add and remove comments
    const addCommentBtn = post.querySelector('.addCommentBtn');
    const commentInput = post.querySelector('.commentInput');
    const commentList = post.querySelector('.commentList');

    addCommentBtn.addEventListener('click', function() {
        const commentText = commentInput.value;
        if (commentText) {
            const comment = document.createElement('li');
            comment.textContent = commentText;

            // Add remove comment button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.style.marginLeft = '10px';
            comment.appendChild(removeBtn);

            // Append the comment to the list
            commentList.appendChild(comment);

            // Clear the comment input
            commentInput.value = '';

            // Remove the comment when the remove button is clicked
            removeBtn.addEventListener('click', function() {
                commentList.removeChild(comment);
            });
        }
    });
});

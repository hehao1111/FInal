# Dockerfile for html
FROM nginx:alpine

# Copy static files to nginx directory
COPY . /usr/share/nginx/html

# Expose the port nginx runs on
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

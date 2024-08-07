FROM python:3.7.9-alpine

ARG BUILD_TIME
ARG DYNAMIC_PARAM
ENV BUILD_TIME=${BUILD_TIME}
ENV DYNAMIC_PARAM=${DYNAMIC_PARAM}

WORKDIR /app
COPY . .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000
CMD ["python", "app.py"]

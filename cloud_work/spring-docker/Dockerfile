FROM openjdk:11 as build

COPY target/spring-docker-*.jar app.jar

ENTRYPOINT ["java","-jar", "app.jar"]
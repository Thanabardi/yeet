from rest_framework import serializers
from api.models import Session


class ScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = (
            "username",
            "score",
            "start"
        )